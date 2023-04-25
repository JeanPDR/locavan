export type getTenantResponse ={
    mainColor: string;
}

export const useApi = () => ({
    getTenant: (tenantSlug: string): boolean | getTenantResponse => {
        switch(tenantSlug){
            case 'locavan':
                return{
                    mainColor: '#ed053f',
                    
                }
            break;
            case 'outro':
                return{
                    mainColor: '#0000ff',
                }
            break;
            default: return false;
        }
        
    }
})