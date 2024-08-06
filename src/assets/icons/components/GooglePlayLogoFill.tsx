import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgGooglePlayLogoFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#google-play-logo-fill_svg__a)"><path fill="#000" d="m14.989 7.136-10.489-6a1 1 0 0 0-1.37.361 1 1 0 0 0-.13.495v12.016a.98.98 0 0 0 .495.855 1 1 0 0 0 1.008 0l10.486-6a.985.985 0 0 0 0-1.728zM10 8.707l1.182 1.183-5.53 3.166zM5.65 2.944l5.533 3.167L10 7.293zm6.432 6.431L10.707 8l1.375-1.375L14.484 8z" /></g><defs><clipPath id="google-play-logo-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgGooglePlayLogoFill);
const Memo = memo(ForwardRef);
export default Memo;