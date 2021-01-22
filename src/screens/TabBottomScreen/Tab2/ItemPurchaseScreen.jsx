import React from 'react'
import {
	IonContent,
	IonHeader,
	IonToolbar,
	IonButtons,
	IonMenuButton,
	IonTitle,
} from '@ionic/react'

export default function ItemPurchaseScreen () {

		return (<>
			<IonHeader>
				<IonToolbar color="primary">
					<IonButtons slot="start">
						<IonMenuButton></IonMenuButton>
					</IonButtons>
					<IonTitle>Purchase Page</IonTitle>
				</IonToolbar>
			</IonHeader>

			<IonContent>
				<div className="ion-padding about-info">
					<h4>Just a regular title Tab 2</h4>
					<p>
						Just a regular paragrah passing by
           		 	</p>
				</div>
			</IonContent>
		</>)
	}
