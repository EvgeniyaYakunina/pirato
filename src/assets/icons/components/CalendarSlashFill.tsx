import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgCalendarSlashFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#calendar-slash-fill_svg__a)"><path fill="#000" d="M14 3v8.723a.25.25 0 0 1-.437.169L7.3 5H13V3h-1.5v.5a.5.5 0 0 1-.533.5.51.51 0 0 1-.467-.517V3H5.482l-.529-.582A.25.25 0 0 1 5.141 2H10.5v-.5a.5.5 0 0 1 .533-.5.51.51 0 0 1 .467.517V2H13a1 1 0 0 1 1 1m-.63 10.164A.5.5 0 0 1 13 14H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1 .5.5 0 0 1 .37.164zM4.597 5 3 3.243V5z" /></g><defs><clipPath id="calendar-slash-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgCalendarSlashFill);
const Memo = memo(ForwardRef);
export default Memo;