import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgUsersFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#users-fill_svg__a)"><path fill="#000" d="M10.28 12.227a.5.5 0 0 1-.42.773H.64a.5.5 0 0 1-.42-.773A6 6 0 0 1 3.173 9.87a3.75 3.75 0 1 1 4.156 0 6 6 0 0 1 2.951 2.357m5.494-.01a6 6 0 0 0-2.946-2.347 3.75 3.75 0 0 0-3.784-6.458.25.25 0 0 0-.083.375 4.74 4.74 0 0 1 .226 5.621.25.25 0 0 0 .067.346 7 7 0 0 1 1.866 1.927c.199.304.28.67.228 1.03a.25.25 0 0 0 .247.29h3.769a.5.5 0 0 0 .483-.372.51.51 0 0 0-.073-.411" /></g><defs><clipPath id="users-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgUsersFill);
const Memo = memo(ForwardRef);
export default Memo;