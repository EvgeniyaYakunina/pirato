import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgFolderSimpleDashedFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#folder-simple-dashed-fill_svg__a)"><path fill="#000" d="M1.5 5V4a1 1 0 0 1 1-1h3.333c.216 0 .427.07.6.2L8.3 4.6a.5.5 0 0 1-.3.9H2a.5.5 0 0 1-.5-.5m4 7.5h-3V12a.5.5 0 0 0-1 0v.539a.963.963 0 0 0 .961.961H5.5a.5.5 0 0 0 0-1m4.5 0H8a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1M14 9a.5.5 0 0 0-.5.5v3h-1a.5.5 0 0 0 0 1h1.056a.945.945 0 0 0 .944-.944V9.5A.5.5 0 0 0 14 9m-.5-4.5h-3a.5.5 0 0 0 0 1h3V7a.5.5 0 0 0 1 0V5.5a1 1 0 0 0-1-1M2 10a.5.5 0 0 0 .5-.5v-2a.5.5 0 1 0-1 0v2a.5.5 0 0 0 .5.5" /></g><defs><clipPath id="folder-simple-dashed-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgFolderSimpleDashedFill);
const Memo = memo(ForwardRef);
export default Memo;