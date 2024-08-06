import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgSwordFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#sword-fill_svg__a)"><path fill="#000" d="M13.5 2h-4a.5.5 0 0 0-.396.195l-4 5.2-.604-.602a1 1 0 0 0-1.415 0l-.543.544a1 1 0 0 0 0 1.414l1.375 1.375-2 2a1 1 0 0 0 0 1.415l.543.542a1 1 0 0 0 1.414 0l2-2 1.375 1.375a1 1 0 0 0 1.415 0l.543-.544a1 1 0 0 0 0-1.414l-.603-.602 5.2-4A.5.5 0 0 0 14 6.5v-4a.5.5 0 0 0-.5-.5M13 6.254l-5.109 3.93-.684-.684 3.147-3.146a.5.5 0 1 0-.708-.707L6.5 8.793l-.683-.684L9.747 3H13z" /></g><defs><clipPath id="sword-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgSwordFill);
const Memo = memo(ForwardRef);
export default Memo;