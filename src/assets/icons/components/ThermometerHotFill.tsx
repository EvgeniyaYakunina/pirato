import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgThermometerHotFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#thermometer-hot-fill_svg__a)"><path fill="#000" d="M9.5 9.13V2.5a2 2 0 1 0-4 0v6.63a3.5 3.5 0 1 0 4 0m-1-5.63h-2v-1a1 1 0 0 1 2 0zm2.581 1.548a.5.5 0 0 1 .146-.692c.937-.612 1.68-.297 2.22-.066.49.21.788.335 1.28.016a.5.5 0 1 1 .546.838c-.405.264-.773.356-1.105.356-.437 0-.807-.159-1.114-.29-.492-.21-.789-.335-1.28-.016a.5.5 0 0 1-.693-.146m4.338 1.404a.5.5 0 0 1-.146.692c-.405.264-.773.356-1.105.356-.437 0-.807-.159-1.114-.29-.492-.21-.789-.336-1.28-.015a.5.5 0 1 1-.547-.838c.937-.612 1.68-.297 2.22-.066.491.21.788.337 1.28.015a.5.5 0 0 1 .692.146" /></g><defs><clipPath id="thermometer-hot-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgThermometerHotFill);
const Memo = memo(ForwardRef);
export default Memo;