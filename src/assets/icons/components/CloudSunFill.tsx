import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgCloudSunFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#cloud-sun-fill_svg__a)"><path fill="#000" d="M10.25 4.5c-.428 0-.854.057-1.266.17a3.5 3.5 0 0 0-.588-.72L8.99 3.1a.5.5 0 1 0-.82-.573l-.594.847A3.5 3.5 0 0 0 6 3h-.109l-.18-1.018a.5.5 0 1 0-.985.173l.18 1.021a3.5 3.5 0 0 0-1.454.928L2.6 3.51a.5.5 0 1 0-.574.82l.848.594A3.5 3.5 0 0 0 2.5 6.5v.108l-1.018.18a.5.5 0 1 0 .173.985l1.02-.18q.136.41.366.776A3.25 3.25 0 0 0 5.25 14h5a4.75 4.75 0 1 0 0-9.5M5.807 7.548a3.26 3.26 0 0 0-1.937.26 2.5 2.5 0 0 1 4.164-2.76 4.77 4.77 0 0 0-2.227 2.5" /></g><defs><clipPath id="cloud-sun-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgCloudSunFill);
const Memo = memo(ForwardRef);
export default Memo;