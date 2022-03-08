import React from 'react';

type LinkType = {
    children: React.ReactNode;
    className?: string;
} & React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
>;

function Link({ className, ...rest }: LinkType) {
    return (
        <a
            className={`inline-block text-lg font-bold relative overflow-hidden before:rounded-md active:scale-90 transition-all duration-300 hover:delay-150 pointer px-2 hover:text-slate-800 before:absolute before:inset-0 before:w-0 before:hover:w-full before:transition-all before:z-[-1] before:bg-pink-400 text-pink-400 ${className}`}
            {...rest}
        />
    );
}

export default Link;
