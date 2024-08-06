import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgFacebookLogoFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#facebook-logo-fill_svg__a)"><path fill="#000" d="M14.5 8a6.51 6.51 0 0 1-5.722 6.454.25.25 0 0 1-.278-.25V9.5H10a.5.5 0 0 0 .5-.533.51.51 0 0 0-.516-.467H8.5V7a1 1 0 0 1 1-1h1a.5.5 0 0 0 .5-.533.51.51 0 0 0-.517-.467H9.5a2 2 0 0 0-2 2v1.5H6a.5.5 0 0 0-.5.533.51.51 0 0 0 .517.467H7.5v4.705a.25.25 0 0 1-.278.25 6.51 6.51 0 0 1-5.718-6.7c.125-3.374 2.86-6.118 6.237-6.25A6.51 6.51 0 0 1 14.5 8" /></g><defs><clipPath id="facebook-logo-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgFacebookLogoFill);
const Memo = memo(ForwardRef);
export default Memo;