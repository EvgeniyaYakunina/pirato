import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgBooksFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#books-fill_svg__a)"><path fill="#000" d="m14.478 12.16-2.074-9.863a1 1 0 0 0-1.188-.775l-2.925.63a1.005 1.005 0 0 0-.77 1.187L9.597 13.2a1 1 0 0 0 1.188.776l2.925-.628a1.005 1.005 0 0 0 .77-1.19M8.5 3.133V3.13l2.925-.625.208.992-2.925.629zm.625 2.962-.21-.994 2.927-.629.209.994zM13.5 12.37l-2.925.625-.208-.992 2.925-.629.208.99zM6.5 2h-3a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1m-3 1h3v1h-3zm3 10h-3v-1h3z" /></g><defs><clipPath id="books-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgBooksFill);
const Memo = memo(ForwardRef);
export default Memo;