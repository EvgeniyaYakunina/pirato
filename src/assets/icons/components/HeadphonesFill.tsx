import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgHeadphonesFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#headphones-fill_svg__a)"><path fill="#000" d="M14.5 8v3.5A1.5 1.5 0 0 1 13 13h-1a1.5 1.5 0 0 1-1.5-1.5V9A1.5 1.5 0 0 1 12 7.5h1.478a5.48 5.48 0 0 0-5.437-5H8a5.5 5.5 0 0 0-5.477 5H4A1.5 1.5 0 0 1 5.5 9v2.5A1.5 1.5 0 0 1 4 13H3a1.5 1.5 0 0 1-1.5-1.5V8a6.507 6.507 0 0 1 11.118-4.584A6.46 6.46 0 0 1 14.5 8" /></g><defs><clipPath id="headphones-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgHeadphonesFill);
const Memo = memo(ForwardRef);
export default Memo;