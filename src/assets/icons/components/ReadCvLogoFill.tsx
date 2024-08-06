import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgReadCvLogoFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#read-cv-logo-fill_svg__a)"><path fill="#000" d="m13.174 2.453-8.14-1.437a1 1 0 0 0-1.159.81L2.015 12.39a1 1 0 0 0 .813 1.159l8.14 1.437a1 1 0 0 0 1.16-.812L13.987 3.61a1 1 0 0 0-.813-1.157m-4.705 5.77a.5.5 0 0 1-.58.405L5.296 8.17a.5.5 0 0 1 .174-.982l2.592.455a.5.5 0 0 1 .407.58m2.937-1.512a.5.5 0 0 1-.58.405L5.64 6.201a.5.5 0 0 1 .175-.985L11 6.132a.5.5 0 0 1 .407.58zm.347-1.97a.5.5 0 0 1-.58.406L5.987 4.23a.5.5 0 1 1 .174-.985l5.188.916a.5.5 0 0 1 .407.58z" /></g><defs><clipPath id="read-cv-logo-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgReadCvLogoFill);
const Memo = memo(ForwardRef);
export default Memo;