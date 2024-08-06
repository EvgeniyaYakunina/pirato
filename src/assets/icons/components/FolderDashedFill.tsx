import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgFolderDashedFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#folder-dashed-fill_svg__a)"><path fill="#000" d="M6 13a.5.5 0 0 1-.5.5H2.461a.96.96 0 0 1-.961-.961V12a.5.5 0 1 1 1 0v.5h3a.5.5 0 0 1 .5.5m4-.5H8a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1M14 9a.5.5 0 0 0-.5.5v3h-1a.5.5 0 0 0 0 1h1.056a.945.945 0 0 0 .944-.944V9.5A.5.5 0 0 0 14 9m-.5-4.5h-3a.5.5 0 0 0 0 1h3V7a.5.5 0 0 0 1 0V5.5a1 1 0 0 0-1-1M2 5.5h6a.5.5 0 0 0 .354-.854L6.5 2.793a1 1 0 0 0-.707-.293H2.5a1 1 0 0 0-1 1V5a.5.5 0 0 0 .5.5M2 10a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-1 0v2a.5.5 0 0 0 .5.5" /></g><defs><clipPath id="folder-dashed-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgFolderDashedFill);
const Memo = memo(ForwardRef);
export default Memo;