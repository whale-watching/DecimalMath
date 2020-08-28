/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

/// <reference types="truffle-typings" />
import { BigNumber } from "bignumber.js";

export interface DecimalMathContract
  extends Truffle.Contract<DecimalMathInstance> {
  "new"(meta?: Truffle.TransactionDetails): Promise<DecimalMathInstance>;
}

export interface MigrationsContract
  extends Truffle.Contract<MigrationsInstance> {
  "new"(meta?: Truffle.TransactionDetails): Promise<MigrationsInstance>;
}

export interface DecimalMathInstance extends Truffle.ContractInstance {
  UNIT(txDetails?: Truffle.TransactionDetails): Promise<BigNumber>;

  toUFixed(
    x: number | BigNumber | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<{ value: BigNumber }>;

  muld(
    x: { value: number | BigNumber | string },
    y: { value: number | BigNumber | string },
    txDetails?: Truffle.TransactionDetails
  ): Promise<{ value: BigNumber }>;

  divd(
    x: { value: number | BigNumber | string },
    y: { value: number | BigNumber | string },
    txDetails?: Truffle.TransactionDetails
  ): Promise<{ value: BigNumber }>;

  addd(
    x: { value: number | BigNumber | string },
    y: { value: number | BigNumber | string },
    txDetails?: Truffle.TransactionDetails
  ): Promise<{ value: BigNumber }>;

  subd(
    x: { value: number | BigNumber | string },
    y: { value: number | BigNumber | string },
    txDetails?: Truffle.TransactionDetails
  ): Promise<{ value: BigNumber }>;

  divdrup(
    x: { value: number | BigNumber | string },
    y: number | BigNumber | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<{ value: BigNumber }>;
}

export interface MigrationsInstance extends Truffle.ContractInstance {
  last_completed_migration(
    txDetails?: Truffle.TransactionDetails
  ): Promise<BigNumber>;

  owner(txDetails?: Truffle.TransactionDetails): Promise<string>;

  setCompleted: {
    (
      completed: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse>;
    call(
      completed: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      completed: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      completed: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  upgrade: {
    (
      new_address: string | BigNumber,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse>;
    call(
      new_address: string | BigNumber,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      new_address: string | BigNumber,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      new_address: string | BigNumber,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };
}
