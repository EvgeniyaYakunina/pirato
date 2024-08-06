import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgOfficeChairFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#office-chair-fill_svg__a)"><path fill="#000" d="M15.5 8a.5.5 0 0 1-.5.5h-1.042A3.005 3.005 0 0 1 11 11H8.5v1.5H10a2 2 0 0 1 2 2 .5.5 0 0 1-1 0 1 1 0 0 0-1-1H8.5v1a.5.5 0 0 1-1 0v-1H6a1 1 0 0 0-1 1 .5.5 0 0 1-1 0 2 2 0 0 1 2-2h1.5V11H5a3.005 3.005 0 0 1-2.958-2.5H1a.5.5 0 0 1 0-1h1.5A.5.5 0 0 1 3 8a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2 .5.5 0 0 1 .5-.5H15a.5.5 0 0 1 .5.5M5 9h6a1 1 0 0 0 .99-1.141l-.857-6a1.005 1.005 0 0 0-.99-.859H5.857a1.005 1.005 0 0 0-.99.859l-.857 6A1 1 0 0 0 5 9" /></g><defs><clipPath id="office-chair-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgOfficeChairFill);
const Memo = memo(ForwardRef);
export default Memo;