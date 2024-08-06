import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgPizzaFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#pizza-fill_svg__a)"><path fill="#000" d="M14.971 3.937a1 1 0 0 0-.453-.618 12.59 12.59 0 0 0-13.036 0 1 1 0 0 0-.336 1.375l6 9.829a1 1 0 0 0 1.71 0l6-9.83a1 1 0 0 0 .115-.756M11.528 8.22a2.5 2.5 0 0 0-2.587 4.236L8 14l-1.969-3.223a2.5 2.5 0 1 0-2.584-4.235l-.397-.65a9.5 9.5 0 0 1 9.9 0z" /></g><defs><clipPath id="pizza-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgPizzaFill);
const Memo = memo(ForwardRef);
export default Memo;