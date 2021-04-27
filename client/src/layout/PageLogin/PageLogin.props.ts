export interface IPageLoginProps {
    email: string;
    onEmailChange: (email: string) => void;
    password: string;
    onPasswordChange: (password: string) => void;
    onSubmit: () => void;
    isLoading?: boolean;
}
