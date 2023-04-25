import { Tenant } from "../../types/Tenant";

export const useApi = () => ({
    getTenant: (tenantSlug: string): boolean | Tenant => {
        switch(tenantSlug){
            case 'locavan':
                return{
                    slug: 'locavan',
                    mainColor: '#ed053f',
                    
                }
            break;
            case 'outro':
                return{
                    slug: 'outro',
                    mainColor: '#0000ff',
                }
            break;
            default: return false;
        }
        
    }
})