import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgFolderUserFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#folder-user-fill_svg__a)"><path fill="#000" d="M14.483 13.871A.5.5 0 0 1 14 14.5h-4a.5.5 0 0 1-.483-.625 2.5 2.5 0 0 1 1.07-1.458 2 2 0 1 1 2.827 0 2.5 2.5 0 0 1 1.07 1.454M14.5 5.5v2a.5.5 0 0 1-1 0v-2h-11v7h5.035a.5.5 0 0 1 0 1H2.461a.96.96 0 0 1-.961-.961V3.5a1 1 0 0 1 1-1h3.293a1 1 0 0 1 .707.293L8.207 4.5H13.5a1 1 0 0 1 1 1m-7.707-1-1-1H2.5v1z" /></g><defs><clipPath id="folder-user-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgFolderUserFill);
const Memo = memo(ForwardRef);
export default Memo;