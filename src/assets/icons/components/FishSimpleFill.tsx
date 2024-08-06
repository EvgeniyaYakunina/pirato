import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgFishSimpleFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#fish-simple-fill_svg__a)"><path fill="#000" d="M10.5 4.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0m2.625 4.943c-.943 1.302-2.346 2.18-4.169 2.608-1.255.295-2.721.375-4.382.246q.15 1.113.42 2.346a.5.5 0 0 1-.977.214 30 30 0 0 1-.463-2.664 29 29 0 0 1-2.662-.463.5.5 0 1 1 .215-.977q1.23.27 2.344.42c-.131-1.66-.05-3.124.245-4.378.429-1.823 1.307-3.226 2.609-4.17.882-.64 2.454-1.397 4.9-1.375 1.324.013 2.551.27 2.737.38a.5.5 0 0 1 .177.177c.11.187.367 1.412.38 2.736.014 1.351-.213 3.297-1.374 4.9m.152-6.97a11 11 0 0 0-2.451-.22c-1.522.04-2.795.406-3.798 1.087a6 6 0 0 0 5.38 5.381c.683-1 1.048-2.276 1.088-3.797.02-.823-.054-1.645-.219-2.452" /></g><defs><clipPath id="fish-simple-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgFishSimpleFill);
const Memo = memo(ForwardRef);
export default Memo;