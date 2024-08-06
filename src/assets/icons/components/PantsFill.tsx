import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgPantsFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#pants-fill_svg__a)"><path fill="#000" d="m3.34 2.719.042-.344a1 1 0 0 1 .993-.875h7.25a1 1 0 0 1 .992.875l.043.343a.25.25 0 0 1-.25.281H3.588a.25.25 0 0 1-.248-.28M10.562 4A2.004 2.004 0 0 0 12.5 5.5h.224a.25.25 0 0 0 .25-.281l-.125-1A.25.25 0 0 0 12.6 4zM3.276 5.5H3.5A2.004 2.004 0 0 0 5.437 4H3.401a.25.25 0 0 0-.25.219l-.125 1a.25.25 0 0 0 .25.281m10.716 7.875-.832-6.656a.25.25 0 0 0-.25-.219h-.41A3.005 3.005 0 0 1 9.542 4H8.5v2.483A.51.51 0 0 1 8.033 7a.5.5 0 0 1-.533-.5V4H6.457A3.004 3.004 0 0 1 3.5 6.5h-.412a.25.25 0 0 0-.25.219l-.83 6.656A1 1 0 0 0 3.023 14.5h2.519a1 1 0 0 0 .97-.754L8 7.996l1.487 5.746a1 1 0 0 0 .97.758h2.518a1 1 0 0 0 1.017-1.125" /></g><defs><clipPath id="pants-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgPantsFill);
const Memo = memo(ForwardRef);
export default Memo;