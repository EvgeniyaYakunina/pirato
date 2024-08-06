import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgFoldersFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#folders-fill_svg__a)"><path fill="#000" d="M14 4H9.667L7.933 2.7c-.173-.13-.384-.2-.6-.2H4.5a1 1 0 0 0-1 1v1h-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h9.556a.945.945 0 0 0 .944-.944V11.5h1.056a.945.945 0 0 0 .944-.944V5a1 1 0 0 0-1-1m0 6.5h-1V7a1 1 0 0 0-1-1H7.667L5.933 4.7c-.173-.13-.384-.2-.6-.2H4.5v-1h2.833L9.2 4.9a.5.5 0 0 0 .3.1H14z" /></g><defs><clipPath id="folders-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgFoldersFill);
const Memo = memo(ForwardRef);
export default Memo;