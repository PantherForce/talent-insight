// Assuming you have installed tailwind-merge via npm or yarn
import { twMerge } from "tailwind-merge";

const ContentContainer = ({ children, classNames }) => {
    return (
        <div
            className={twMerge(
                `container max-w-7xl mx-auto p-4 py-8 md:p-16 lg:py-16`,
                classNames
            )}
        >
            {children}
        </div>
    );
};

export default ContentContainer;
