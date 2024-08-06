import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgMaskSadFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#mask-sad-fill_svg__a)"><path fill="#000" d="M13.563 2.175a1 1 0 0 0-.927-.107c-.877.341-2.647.914-4.636.914s-3.76-.573-4.638-.914A1 1 0 0 0 2 3v3.486c0 2.24.603 4.353 1.699 5.948C4.834 14.088 6.36 14.997 8 14.997s3.166-.91 4.301-2.563C13.397 10.84 14 8.727 14 6.487V3a1 1 0 0 0-.437-.825M4.124 7.833a.502.502 0 0 1 .75-.667c.168.188.553.334.875.334s.71-.147.875-.334a.502.502 0 0 1 .75.667c-.36.399-1.011.667-1.625.667s-1.266-.268-1.625-.667m5.789 3.944a.5.5 0 0 1-.69.14C8.817 11.646 8.5 11.5 8 11.5s-.817.146-1.223.416a.5.5 0 0 1-.554-.832c.527-.35 1.03-.584 1.777-.584s1.25.233 1.777.584a.5.5 0 0 1 .14.693zm1.956-3.944c-.357.399-1.009.667-1.625.667s-1.266-.268-1.625-.667a.504.504 0 0 1 .755-.667c.168.188.553.334.875.334s.71-.147.875-.334a.502.502 0 1 1 .75.667z" /></g><defs><clipPath id="mask-sad-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgMaskSadFill);
const Memo = memo(ForwardRef);
export default Memo;