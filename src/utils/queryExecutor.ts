import { TableData, QueryResult } from '../types';
import { mockData } from '../data/mockData';

export const executeQuery = (query: string): QueryResult => {
  try {
    // Extract table name from query
    const tableMatch = query.match(/FROM\s+(\w+)/i);
    if (!tableMatch) {
      throw new Error('Invalid query: No table specified');
    }
    const tableName = tableMatch[1].toLowerCase();
    
    // Get the base data
    let data = [...mockData[tableName]];
    if (!data) {
      throw new Error(`Table '${tableName}' not found`);
    }

    // Process WHERE clause
    const whereMatch = query.match(/WHERE\s+(.+?)(?:\s+ORDER\s+BY|\s*$)/i);
    if (whereMatch) {
      const whereClause = whereMatch[1];
      data = data.filter(row => {
        // Simple condition parsing
        if (whereClause.includes('>')) {
          const [field, value] = whereClause.split('>').map(s => s.trim());
          return row[field] > Number(value);
        } else if (whereClause.includes('<')) {
          const [field, value] = whereClause.split('<').map(s => s.trim());
          return row[field] < Number(value);
        } else if (whereClause.includes('=')) {
          const [field, value] = whereClause.split('=').map(s => s.trim().replace(/['"]/g, ''));
          return String(row[field]).toLowerCase() === String(value).toLowerCase();
        } else if (whereClause.includes('LIKE')) {
          const [field, pattern] = whereClause.split('LIKE').map(s => s.trim());
          // Remove quotes and handle wildcards
          const cleanPattern = pattern.replace(/['"]/g, '');
          const regexPattern = cleanPattern
            .replace(/%/g, '.*')
            .replace(/_/g, '.');
          return new RegExp(`^${regexPattern}$`, 'i').test(String(row[field]));
        }
        return true;
      });
    }

    // Process ORDER BY clause
    const orderMatch = query.match(/ORDER\s+BY\s+(\w+)(?:\s+(ASC|DESC))?/i);
    if (orderMatch) {
      const [, field, direction] = orderMatch;
      data.sort((a, b) => {
        const aVal = a[field];
        const bVal = b[field];
        const modifier = direction?.toUpperCase() === 'DESC' ? -1 : 1;
        return aVal < bVal ? -1 * modifier : aVal > bVal ? 1 * modifier : 0;
      });
    }

    return {
      data,
      columns: data.length > 0 ? Object.keys(data[0]) : []
    };
  } catch (error) {
    console.error('Query execution error:', error);
    return {
      data: [],
      columns: []
    };
  }
}; 