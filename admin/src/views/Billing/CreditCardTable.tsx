import React from 'react';
import styled from 'styled-components';

import DataTable from '../../components/DataTable';
import { Text, RadioButton } from '../../core-ui';
import { FONT_WEIGHT_LIGHT } from '../../constants/theme';

// type Props = {
//   paymentMethodList: Array<PaymentMethodList>;
// };

export default function CreditCardTable() {
  // let { paymentMethodList } = props;
  return (
    <DataTable>
      <DataTable.HeaderRow>
        <DataTable.HeaderCell width={100}>Primary</DataTable.HeaderCell>
        <DataTable.HeaderCell width={220}>Card Number</DataTable.HeaderCell>
        <DataTable.HeaderCell>Expiration</DataTable.HeaderCell>
      </DataTable.HeaderRow>
      {paymentMethodList.map((p) => (
        <PaymentMethodRow key={p.id} {...p} />
      ))}
    </DataTable>
  );
}

function PaymentMethodRow(props: PaymentMethodList) {
  let { id, lastFourDigits, expMonth, expYear, isDefault } = props;

  return (
    <DataTable.Row>
      <DataTable.Cell width={100}>
        <DefaultPaymentRadioButton
          name="primary"
          title=""
          isSelected={isDefault}
        // onPress={async () => {
        //   if (isDefault || changeDefaultLoading) {
        //     return;
        //   }
        //   await changeDefaultPaymentMethod({
        //     variables: {
        //       paymentMethodId: id,
        //     },
        //     refetchQueries: ['PaymentMethodList'],
        //   });
        // }}
        />
      </DataTable.Cell>
      <DataTable.Cell width={220}>
        <Text fontWeight={FONT_WEIGHT_LIGHT}>Card ending in **{lastFourDigits}</Text>
      </DataTable.Cell>
      <DataTable.Cell>
        <Text fontWeight={FONT_WEIGHT_LIGHT}>
          {String(expMonth).padStart(2, '0')}/{String(expYear).slice(2)}
        </Text>
      </DataTable.Cell>
    </DataTable.Row>
  );
}

const DefaultPaymentRadioButton = styled(RadioButton)`
  margin-left: 12px;
`;

// Fake stock data until backend parallelk path items are ready
const paymentMethodList = [
  {
    id: '1',
    lastFourDigits: '4467',
    expMonth: 8,
    expYear: 2020,
    isDefault: true
  },
  {
    id: '1',
    lastFourDigits: '4437',
    expMonth: 8,
    expYear: 2020,
    isDefault: false
  }
]

// TODO: move this typing elsewhere (either generated or determined in a different fashion)
interface PaymentMethodList {
  id: string;
  expMonth: number;
  expYear: number;
  lastFourDigits: string;
  isDefault: boolean;
}
