import * as React from 'react'
import { MyIconProps } from './MyIcon'
import { FlexProps, TextProps, ButtonProps } from '@aws-amplify/ui-react'

export declare type EscapeHatchProps = {
  [elementHierarchy: string]: Record<string, unknown>
} | null

export declare type VariantValues = {
  [key: string]: string
}
export declare type Variant = {
  variantValues: VariantValues
  overrides: EscapeHatchProps
}

export declare type PrimitiveOverrideProps<T> = Partial<T> &
  React.DOMAttributes<HTMLDivElement>

export declare type MarketingPricingOverridesProps = {
  Pricing?: PrimitiveOverrideProps<TextProps>
  'Choose your plan'?: PrimitiveOverrideProps<TextProps>
  '14 day free trial for any plan, no credit card needed'?: PrimitiveOverrideProps<TextProps>
  'Frame 432'?: PrimitiveOverrideProps<FlexProps>
  'Free plan'?: PrimitiveOverrideProps<TextProps>
  '$0/mo'?: PrimitiveOverrideProps<TextProps>
  'Free forever, always'?: PrimitiveOverrideProps<TextProps>
  'Frame 42939393278'?: PrimitiveOverrideProps<FlexProps>
  MyIcon39393299?: MyIconProps
  'Frame 43039393324'?: PrimitiveOverrideProps<FlexProps>
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.29766691'?: PrimitiveOverrideProps<TextProps>
  'Frame 13829766688'?: PrimitiveOverrideProps<FlexProps>
  MyIcon39393331?: MyIconProps
  'Frame 43139393330'?: PrimitiveOverrideProps<FlexProps>
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.29766695'?: PrimitiveOverrideProps<TextProps>
  'Frame 13929766692'?: PrimitiveOverrideProps<FlexProps>
  MyIcon39393349?: MyIconProps
  'Frame 43039393348'?: PrimitiveOverrideProps<FlexProps>
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.29766699'?: PrimitiveOverrideProps<TextProps>
  'Frame 13729766696'?: PrimitiveOverrideProps<FlexProps>
  Button29766686?: PrimitiveOverrideProps<ButtonProps>
  'Frame 39029766683'?: PrimitiveOverrideProps<FlexProps>
  'Basic plan'?: PrimitiveOverrideProps<TextProps>
  '$20/mo'?: PrimitiveOverrideProps<TextProps>
  'Billed annually39393395'?: PrimitiveOverrideProps<TextProps>
  'Frame 42939393392'?: PrimitiveOverrideProps<FlexProps>
  MyIcon39393398?: MyIconProps
  'Frame 43039393397'?: PrimitiveOverrideProps<FlexProps>
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.39393399'?: PrimitiveOverrideProps<TextProps>
  'Frame 13839393396'?: PrimitiveOverrideProps<FlexProps>
  MyIcon39393402?: MyIconProps
  'Frame 43139393401'?: PrimitiveOverrideProps<FlexProps>
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.39393403'?: PrimitiveOverrideProps<TextProps>
  'Frame 13939393400'?: PrimitiveOverrideProps<FlexProps>
  MyIcon39393406?: MyIconProps
  'Frame 43039393405'?: PrimitiveOverrideProps<FlexProps>
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.39393407'?: PrimitiveOverrideProps<TextProps>
  'Frame 13739393404'?: PrimitiveOverrideProps<FlexProps>
  Button39393408?: PrimitiveOverrideProps<ButtonProps>
  'Frame 39039393391'?: PrimitiveOverrideProps<FlexProps>
  'Pro plan'?: PrimitiveOverrideProps<TextProps>
  '$100/mo'?: PrimitiveOverrideProps<TextProps>
  'Billed annually39393611'?: PrimitiveOverrideProps<TextProps>
  'Frame 42939393608'?: PrimitiveOverrideProps<FlexProps>
  MyIcon39393614?: MyIconProps
  'Frame 43039393613'?: PrimitiveOverrideProps<FlexProps>
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.39393615'?: PrimitiveOverrideProps<TextProps>
  'Frame 13839393612'?: PrimitiveOverrideProps<FlexProps>
  MyIcon39393618?: MyIconProps
  'Frame 43139393617'?: PrimitiveOverrideProps<FlexProps>
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.39393619'?: PrimitiveOverrideProps<TextProps>
  'Frame 13939393616'?: PrimitiveOverrideProps<FlexProps>
  MyIcon39393622?: MyIconProps
  'Frame 43039393621'?: PrimitiveOverrideProps<FlexProps>
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.39393623'?: PrimitiveOverrideProps<TextProps>
  'Frame 13739393620'?: PrimitiveOverrideProps<FlexProps>
  Button39393624?: PrimitiveOverrideProps<ButtonProps>
  'Frame 391'?: PrimitiveOverrideProps<FlexProps>
  'Frame 63'?: PrimitiveOverrideProps<FlexProps>
} & EscapeHatchProps

export declare type MarketingPricingProps = React.PropsWithChildren<
  Partial<FlexProps> & {
    overrides?: MarketingPricingOverridesProps | undefined | null
  }
>

export default function MarketingPricing(
  props: MarketingPricingProps
): React.ReactElement
