export interface CodaLoginConfig {
    title: string;
    titleTwo?: string;
    logoUrl: string;
    successRoute: string;
    registerRoute?: string;
    verifyRole: boolean;
    withRole: number;
    isInternal: boolean;
    isLoginWithGoogle?: boolean;
    backgroundImage?: string;
}
