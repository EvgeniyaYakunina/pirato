import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgVinylRecordFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#vinyl-record-fill_svg__a)"><path fill="#000" d="M8 1.5A6.5 6.5 0 1 0 14.5 8 6.507 6.507 0 0 0 8 1.5M4.5 8a.5.5 0 1 1-1 0A4.505 4.505 0 0 1 8 3.5a.5.5 0 0 1 0 1A3.504 3.504 0 0 0 4.5 8m2 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0M8 12.5a.5.5 0 0 1 0-1A3.504 3.504 0 0 0 11.5 8a.5.5 0 0 1 1 0A4.505 4.505 0 0 1 8 12.5" /></g><defs><clipPath id="vinyl-record-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgVinylRecordFill);
const Memo = memo(ForwardRef);
export default Memo;