$('./body'){
	$("./div[@id='wrapper']"){
		$("./div[@id='footer']"){
			$(".//div[@class='container-holder']"){
			
				move_here("./div[@id='footermenu2']","top"){
					$("./ul[contains(@class,'country-list')]"){
						$(".//ul"){
							insert_after("div",id:"hrdottedLine")
						}
					}
				}
				
				$("./div[@id='footermenu3']"){
					remove('./p')
				}
				
				$("./div[contains(@class,'col-4')]"){
					move_here("../../../../../.././/ul[@class='social']","top"){
						remove(".//li[@class='livechat']")
					}
				}
			
			}
		}
	
	}
	
}
