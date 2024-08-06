import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgAtFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#at-fill_svg__a)"><path fill="#000" d="M14.5 8v.095c-.021.891-.352 1.905-1.75 1.905C11.304 10 11 8.912 11 8V5.5a.499.499 0 0 0-.868-.334.5.5 0 0 0-.132.35v.25a3 3 0 1 0 .42 4.004q.095.165.212.313c.335.417.975.917 2.118.917q.29 0 .576-.047a.25.25 0 0 1 .256.375A6.5 6.5 0 0 1 7.869 14.5c-3.423-.069-6.231-2.821-6.364-6.243A6.5 6.5 0 1 1 14.5 8M6 8a2 2 0 1 0 4 0 2 2 0 0 0-4 0" /></g><defs><clipPath id="at-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgAtFill);
const Memo = memo(ForwardRef);
export default Memo;