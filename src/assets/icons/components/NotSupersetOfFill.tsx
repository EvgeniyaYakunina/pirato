import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgNotSupersetOfFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#not-superset-of-fill_svg__a)"><path fill="#000" d="M10.256 6.181A1.5 1.5 0 0 1 9 8.5h-.773zM14 3v10a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1m-2.17.625a.5.5 0 0 0-.706.047l-.973 1.11A2.5 2.5 0 0 0 9 4.5H5a.5.5 0 1 0 0 1h4q.235 0 .46.072L6.897 8.5H5a.5.5 0 1 0 0 1h1.023l-1.898 2.17a.5.5 0 0 0 .75.66l.727-.83H11a.5.5 0 0 0 0-1H6.477l.875-1H9a2.5 2.5 0 0 0 1.93-4.088l.945-1.083a.5.5 0 0 0-.046-.704" /></g><defs><clipPath id="not-superset-of-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgNotSupersetOfFill);
const Memo = memo(ForwardRef);
export default Memo;