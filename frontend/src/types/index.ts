// 服务器相关类型定义
export interface Server {
  id: number;
  name: string;
  ip_address: string;
  ssh_port: number;
  description?: string;
  provider?: string;
  os_type?: string;
  cpu_cores?: number;
  memory_gb?: number;
  disk_gb?: number;
  bandwidth_mbps?: number;
  expire_date?: string;
  monthly_cost?: number;
  status: 'online' | 'offline' | 'timeout' | 'unknown';
  last_check?: string;
  created_at: string;
  updated_at: string;
}

// SSH凭据类型
export interface SSHCredential {
  id: number;
  server_id: number;
  username: string;
  password_encrypted?: string;
  private_key_encrypted?: string;
  created_at: string;
}

// 第三方面板类型
export interface ServerPanel {
  id: number;
  server_id: number;
  panel_type: '1panel' | 'bt' | 'cpanel' | 'plesk' | 'custom';
  panel_name?: string;
  panel_url: string;
  panel_port?: number;
  username?: string;
  password_encrypted?: string;
  api_key_encrypted?: string;
  notes?: string;
  created_at: string;
}

// 监控记录类型
export interface MonitoringLog {
  id: number;
  server_id: number;
  status: 'online' | 'offline' | 'timeout';
  response_time?: number;
  checked_at: string;
}

// 服务器配置类型
export interface ServerConfig {
  id: number;
  server_id: number;
  config_category: 'system' | 'network' | 'security' | 'custom';
  config_key: string;
  config_value_encrypted: string;
  is_sensitive: boolean;
  notes?: string;
  created_at: string;
}

// API响应类型
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}

// 分页类型
export interface PaginationParams {
  page: number;
  limit: number;
  search?: string;
  sort?: string;
  order?: 'ASC' | 'DESC';
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

// 统计数据类型
export interface DashboardStats {
  total_servers: number;
  online_servers: number;
  offline_servers: number;
  expiring_soon: number;
  total_monthly_cost: number;
  uptime_percentage: number;
}
