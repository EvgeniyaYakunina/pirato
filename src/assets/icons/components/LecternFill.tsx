import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgLecternFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#lectern-fill_svg__a)"><path fill="#000" d="m15.394 7.553-2.5-5A1 1 0 0 0 12 2H4a1 1 0 0 0-.894.553l-2.5 5A1 1 0 0 0 1.5 9h6v4H6a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1H8.5V9h6a1 1 0 0 0 .894-1.447M12 7.5H4a.5.5 0 0 1 0-1h8a.5.5 0 0 1 0 1" /></g><defs><clipPath id="lectern-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgLecternFill);
const Memo = memo(ForwardRef);
export default Memo;