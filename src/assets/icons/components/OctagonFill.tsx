import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgOctagonFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#octagon-fill_svg__a)"><path fill="#000" d="m14.207 5.014-3.221-3.22a1 1 0 0 0-.708-.294H5.722c-.265 0-.52.106-.708.293l-3.22 3.221a1 1 0 0 0-.294.708v4.556c0 .265.106.52.293.708l3.221 3.22c.188.188.443.293.708.294h4.556c.265 0 .52-.106.708-.293l3.22-3.221c.188-.189.293-.443.294-.708V5.722c0-.265-.106-.52-.293-.708" /></g><defs><clipPath id="octagon-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgOctagonFill);
const Memo = memo(ForwardRef);
export default Memo;