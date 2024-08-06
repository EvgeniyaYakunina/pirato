import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgPhoneSlashFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#phone-slash-fill_svg__a)"><path fill="#000" d="M14.767 11.116a1 1 0 0 1-1.148.316l-1.548-1.187a.2.2 0 0 1-.033-.03L6.824 4.476a.25.25 0 0 1 .159-.417c2.688-.289 5.484.57 7.491 2.577 1.25 1.25 1.37 3.092.293 4.48M3.371 2.164a.5.5 0 1 0-.74.672l1.726 1.9a8.9 8.9 0 0 0-2.831 1.9c-1.25 1.25-1.37 3.092-.294 4.48a1 1 0 0 0 1.15.316l3.062-1.085.018-.007a1 1 0 0 0 .61-.732l.368-1.845q.263-.09.536-.15l5.656 6.223a.499.499 0 1 0 .74-.672z" /></g><defs><clipPath id="phone-slash-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgPhoneSlashFill);
const Memo = memo(ForwardRef);
export default Memo;