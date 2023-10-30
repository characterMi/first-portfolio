import { About, HomePage, MyPortfolios, Resume } from '../pages';

export const mainContent = () => {
    const pageContent = [
        {
            value:
                <HomePage />
        },
        {
            value:
                <Resume />
        },
        {
            value:
                <About />
        },
        {
            value:
                <MyPortfolios />
        }
    ]
    return pageContent;
}