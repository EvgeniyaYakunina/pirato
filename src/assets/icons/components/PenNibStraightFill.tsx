import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgPenNibStraightFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#pen-nib-straight-fill_svg__a)"><path fill="#000" d="m13.896 7.743-.012-.024L12 4.37V2a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v2.369l-1.884 3.35-.012.024a1 1 0 0 0 .091 1.036l.007.008 4.85 6.301a.25.25 0 0 0 .448-.15V9.664a1.5 1.5 0 1 1 1 0v5.274a.25.25 0 0 0 .448.152l4.85-6.3.006-.01a1 1 0 0 0 .092-1.037M11 4H5V2h6z" /></g><defs><clipPath id="pen-nib-straight-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgPenNibStraightFill);
const Memo = memo(ForwardRef);
export default Memo;