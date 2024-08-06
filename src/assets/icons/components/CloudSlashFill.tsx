import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgCloudSlashFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#cloud-slash-fill_svg__a)"><path fill="#000" d="M15.5 8.045a5.48 5.48 0 0 1-1.6 3.83.25.25 0 0 1-.28.05.3.3 0 0 1-.08-.06l-7.054-7.76a.25.25 0 0 1 .025-.36A5.5 5.5 0 0 1 10.054 2.5c3.018.03 5.47 2.527 5.446 5.545M3.37 2.164a.5.5 0 1 0-.74.672l2.453 2.699-.004.007A4 4 0 0 0 .5 9.562C.533 11.759 2.365 13.5 4.563 13.5H10a5.5 5.5 0 0 0 1.986-.372l.644.708a.5.5 0 0 0 .708.033.52.52 0 0 0 .018-.72z" /></g><defs><clipPath id="cloud-slash-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgCloudSlashFill);
const Memo = memo(ForwardRef);
export default Memo;