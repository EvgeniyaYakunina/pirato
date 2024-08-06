import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgAirplaneTakeoffFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#airplane-takeoff-fill_svg__a)"><path fill="#000" d="M11 13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1 0-1h9a.5.5 0 0 1 .5.5m4.394-8.077L14.23 3.929l-.007-.009a2.49 2.49 0 0 0-3.205-.57L7.794 5.274l-3.372-1.24a.5.5 0 0 0-.349 0l-.448.17-.02.009a1 1 0 0 0-.283 1.654l1.365 1.324-1.26.763-1.767-.596a.5.5 0 0 0-.38.025l-.187.091a1 1 0 0 0-.28 1.639l2.25 2.204.007.008a2.49 2.49 0 0 0 2.971.334l9.213-5.5a.5.5 0 0 0 .138-.736z" /></g><defs><clipPath id="airplane-takeoff-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgAirplaneTakeoffFill);
const Memo = memo(ForwardRef);
export default Memo;