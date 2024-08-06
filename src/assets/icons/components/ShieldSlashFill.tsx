import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgShieldSlashFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#shield-slash-fill_svg__a)"><path fill="#000" d="M14 3.5V7c0 1.577-.366 2.857-.894 3.884a.25.25 0 0 1-.309.12.25.25 0 0 1-.099-.066l-7.29-8.02a.25.25 0 0 1 .187-.418H13a1 1 0 0 1 1 1M3.37 2.164a.5.5 0 0 0-.854.46A1 1 0 0 0 2 3.5V7c0 3.295 1.595 5.292 2.933 6.387 1.441 1.178 2.875 1.58 2.938 1.595a.5.5 0 0 0 .262 0c.063-.016 1.495-.416 2.938-1.595q.328-.271.628-.575l.931 1.024a.499.499 0 1 0 .74-.672z" /></g><defs><clipPath id="shield-slash-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgShieldSlashFill);
const Memo = memo(ForwardRef);
export default Memo;