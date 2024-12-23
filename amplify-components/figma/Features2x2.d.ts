import * as React from 'react'
import { MyIconProps } from './MyIcon'
import { FlexProps, TextProps } from '@aws-amplify/ui-react'

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

export declare type Features2x2OverridesProps = {
  MyIcon39424114?: MyIconProps
  'Frame 43039424113'?: PrimitiveOverrideProps<FlexProps>
  'Feature A'?: PrimitiveOverrideProps<TextProps>
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.29766596'?: PrimitiveOverrideProps<TextProps>
  'Frame 37429766594'?: PrimitiveOverrideProps<FlexProps>
  MyIcon39424117?: MyIconProps
  'Frame 43039424116'?: PrimitiveOverrideProps<FlexProps>
  'Feature B'?: PrimitiveOverrideProps<TextProps>
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.29766599'?: PrimitiveOverrideProps<TextProps>
  'Frame 37329766597'?: PrimitiveOverrideProps<FlexProps>
  'Frame 13629766593'?: PrimitiveOverrideProps<FlexProps>
  MyIcon39403234?: MyIconProps
  'Frame 43039403233'?: PrimitiveOverrideProps<FlexProps>
  'Feature C'?: PrimitiveOverrideProps<TextProps>
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.29766603'?: PrimitiveOverrideProps<TextProps>
  'Frame 37429766601'?: PrimitiveOverrideProps<FlexProps>
  MyIcon39424111?: MyIconProps
  'Frame 43039424110'?: PrimitiveOverrideProps<FlexProps>
  'Feature D'?: PrimitiveOverrideProps<TextProps>
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.29766606'?: PrimitiveOverrideProps<TextProps>
  'Frame 37329766604'?: PrimitiveOverrideProps<FlexProps>
  'Frame 393'?: PrimitiveOverrideProps<FlexProps>
  'Frame 13629766592'?: PrimitiveOverrideProps<FlexProps>
} & EscapeHatchProps

export declare type Features2x2Props = React.PropsWithChildren<
  Partial<FlexProps> & {
    overrides?: Features2x2OverridesProps | undefined | null
  }
>

export default function Features2x2(props: Features2x2Props): React.ReactElement
