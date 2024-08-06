import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgTestTubeFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#test-tube-fill_svg__a)"><path fill="#000" d="m14.854 5.396-3.75-3.75a.5.5 0 0 0-.708 0L2.32 9.723a2.798 2.798 0 1 0 3.958 3.957l6.993-6.993 1.388-.462a.5.5 0 0 0 .196-.828m-2.012.38a.5.5 0 0 0-.196.12L10.173 8.37c-.53.182-1.36.25-2.442-.312-.662-.346-1.261-.5-1.785-.546l4.804-4.804 2.824 2.824z" /></g><defs><clipPath id="test-tube-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgTestTubeFill);
const Memo = memo(ForwardRef);
export default Memo;