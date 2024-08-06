import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgBiohazardFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#biohazard-fill_svg__a)"><path fill="#000" d="M14.99 9.974a3.755 3.755 0 0 0-3.386-3.457 4 4 0 0 0-.188-.35 3.746 3.746 0 0 0-1.676-4.87l-.009-.005a.5.5 0 0 0-.435-.011.5.5 0 0 0-.024.899h.004c.074.043 1.224.678 1.224 2.07 0 .266-.042.53-.125.783a3.99 3.99 0 0 0-4.75 0A2.5 2.5 0 0 1 5.5 4.25c0-1.397 1.158-2.032 1.228-2.069a.5.5 0 0 0-.458-.889l-.01.005a3.75 3.75 0 0 0-1.678 4.875 3 3 0 0 0-.187.348 3.757 3.757 0 0 0-3.393 3.762A.5.5 0 0 0 2 10.25q0-.129.012-.25c.045-.39.253-1.193 1.165-1.718.257-.15.539-.251.832-.3q-.01.134-.01.27a4 4 0 0 0 2.438 3.682 2.5 2.5 0 0 1-.76.678c-1.192.687-2.305.022-2.399-.037l-.008-.005a.5.5 0 0 0-.544.84l.015.009a3.746 3.746 0 0 0 5.18-1.17h.158a3.75 3.75 0 0 0 5.18 1.169l.015-.01a.5.5 0 0 0-.545-.838l-.007.005c-.095.059-1.208.724-2.4.036a2.5 2.5 0 0 1-.76-.68A4.01 4.01 0 0 0 11.99 7.98c.293.05.575.151.833.3.904.522 1.116 1.316 1.164 1.708q.012.13.013.263a.499.499 0 1 0 1 .029q.005-.153-.01-.305m-8.132 1.05a3.005 3.005 0 0 1-1.848-3.01l.063.015a2.5 2.5 0 0 1 1.784 2.995zM8 8.382l-.007-.012h.014zM8 6.75a2.5 2.5 0 0 1-1.87-.843 2.99 2.99 0 0 1 3.74 0A2.5 2.5 0 0 1 8 6.75m1.143 4.273a2.493 2.493 0 0 1 1.847-3.008q.01.115.01.235a3 3 0 0 1-1.858 2.773z" /></g><defs><clipPath id="biohazard-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgBiohazardFill);
const Memo = memo(ForwardRef);
export default Memo;