import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgFolderStarFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#folder-star-fill_svg__a)"><path fill="#000" d="m14.818 10.486-1.407 1.162.428 1.732a.5.5 0 0 1-.738.55L11.5 12.99l-1.6.942a.5.5 0 0 1-.74-.551l.429-1.732-1.407-1.162a.5.5 0 0 1 .28-.883l1.864-.145.715-1.656a.5.5 0 0 1 .918 0l.715 1.656 1.865.145a.5.5 0 0 1 .28.883M8.035 13a.5.5 0 0 1-.5.5H2.461a.96.96 0 0 1-.961-.961V3.5a1 1 0 0 1 1-1h3.293a1 1 0 0 1 .707.293L8.207 4.5H13.5a1 1 0 0 1 1 1v2a.5.5 0 0 1-1 0v-2h-11v7h5.035a.5.5 0 0 1 .5.5M2.5 4.5h4.293l-1-1H2.5z" /></g><defs><clipPath id="folder-star-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgFolderStarFill);
const Memo = memo(ForwardRef);
export default Memo;