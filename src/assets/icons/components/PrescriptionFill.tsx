import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgPrescriptionFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#prescription-fill_svg__a)"><path fill="#000" d="M8 7.5H6v-3h2a1.5 1.5 0 0 1 0 3M14 3v10a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1m-2.146 8.646-.897-.896.897-.896a.5.5 0 0 0-.708-.708l-.896.897-1.625-1.625A2.5 2.5 0 0 0 8 3.5H5.5A.5.5 0 0 0 5 4v7a.5.5 0 0 0 1 0V8.5h1.293l2.25 2.25-.897.896a.5.5 0 0 0 .708.708l.896-.897.896.897a.501.501 0 0 0 .708-.708" /></g><defs><clipPath id="prescription-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgPrescriptionFill);
const Memo = memo(ForwardRef);
export default Memo;