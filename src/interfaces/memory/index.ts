import { FamilyInterface } from 'interfaces/family';
import { GetQueryInterface } from 'interfaces';

export interface MemoryInterface {
  id?: string;
  date: any;
  description: string;
  keywords: string;
  family_id: string;
  created_at?: any;
  updated_at?: any;

  family?: FamilyInterface;
  _count?: {};
}

export interface MemoryGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  keywords?: string;
  family_id?: string;
}
