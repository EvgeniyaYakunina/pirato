import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgChalkboardTeacherFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#chalkboard-teacher-fill_svg__a)"><path fill="#000" d="M13.5 2.5h-11a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h.837a.5.5 0 0 0 .452-.286 3 3 0 0 1 5.422 0 .5.5 0 0 0 .452.286H13.5a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1m-7 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m7 2H9.964a4 4 0 0 0-.822-1H12a.5.5 0 0 0 .5-.5V5a.5.5 0 0 0-.5-.5H4a.5.5 0 0 0-.5.5v6a.5.5 0 0 0 .375.484c-.334.29-.618.633-.84 1.016H2.5v-9h11z" /></g><defs><clipPath id="chalkboard-teacher-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgChalkboardTeacherFill);
const Memo = memo(ForwardRef);
export default Memo;