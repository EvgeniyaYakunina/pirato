import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgFarmFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#farm-fill_svg__a)"><path fill="#000" d="M8.552 13.777a.5.5 0 0 1-.693.14A11.45 11.45 0 0 0 1.5 12a.5.5 0 0 1 0-1c2.46-.004 4.865.721 6.913 2.084a.5.5 0 0 1 .139.693M1.5 9a.5.5 0 1 0 0 1 13.43 13.43 0 0 1 9.448 3.857.5.5 0 1 0 .7-.714A14.42 14.42 0 0 0 1.5 9m13 1c-1.022 0-2.04.114-3.037.343q.516.39 1 .823A12.6 12.6 0 0 1 14.5 11a.5.5 0 0 1 0 1q-.562 0-1.116.054.521.542.997 1.133a.5.5 0 1 1-.78.626A15.44 15.44 0 0 0 1.5 8a.5.5 0 1 1 0-1c1.006 0 2.01.092 3 .274V5a.5.5 0 0 1 .2-.4l4-3a.5.5 0 0 1 .6 0l4 3a.5.5 0 0 1 .2.4v2.031q.498-.03 1-.031a.5.5 0 0 1 0 1 15.4 15.4 0 0 0-5.266.918q.59.312 1.153.674A14.5 14.5 0 0 1 14.5 9a.5.5 0 0 1 0 1M8.004 8.33a16.3 16.3 0 0 1 2.496-.842V6h-3v2.125q.255.096.504.204" /></g><defs><clipPath id="farm-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgFarmFill);
const Memo = memo(ForwardRef);
export default Memo;