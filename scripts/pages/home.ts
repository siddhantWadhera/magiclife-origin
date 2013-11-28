$("./body") {
	$("./div[@id='wrapper']"){
		$(".//div[@id='main']"){
			$(".//div[@id='content']"){
				#remove()  #temporary removed.
				#add_class("home-content")
				
			}
			$("./div[@class='main-holder']"){
				$("./div[@id='sidebar']"){
					## the club finder div 
					$(".//div[@class='sidebar-holder']"){
						$("./div[@class='box-form']"){
							$("./div[@id='tab-1']"){
								
								$(".//fieldset"){
									#$("./div[@class='field'][1]"){
										#$("./div[@class='row'][2]"){
										#	#remove()
										#	insert_after("div",class:"date-group")
										#	$("./div[contains(@class,'half-col')]"){#remove()
										#		$("./div[@class='row'][2]") {
										#			%one = this()
										#			$("../div[@class='row'][3]") {
										#				move_children_to(%one, position("bottom"))
										#				remove()
										#			}
										#			wrap("div",class:"date-input") {
										#				$("./div") {
										#					unwrap()
										#				}
										#			}
												  
										#		}
												
										#	}
											
										#}
										#$("./div[@class='date-group']"){
										#	move_here('//div[@class="date-input"]')
										#}
										
									#}
									$("./div[@class='field'][2]"){
										$("./div[@class='row'][2]"){
											$("./div[contains(@class,'col')][4]"){
												insert_before("div",class:"mw_col"){
													add_class("mw_quarter-col")
													move_here(".././div[position()<4]","bottom"){
														wrap("div",class:"mw_row") {
															$("./div") {
																unwrap()
															}
														}
													}
												}
											}
										}
									}	
								}
							}
							$("./div[@id='tab-2']"){
								$(".//fieldset"){
									$("./div[@class='field'][2]"){
										$("./div[@class='row'][1]"){
											%two = this()
											$("../div[@class='row'][2]") {
												move_children_to(%two, position("bottom"))
												remove()
											}
										}
									}
									$("./div[@class='field'][3]"){
										$("./div[@class='row'][2]"){
											$("./div[contains(@class,'half-col')]"){
												remove_class('half-col')
												add_class('mw_quarter-col')
											}
											insert_bottom("div",class:"mw_quarter-col"){
												add_class("mw_col")
												%three = this()
												$("(.././div[contains(@class,'quarter-col')])[1]") {
													$("(./div[@class='row'])[5]"){
														wrap("div",class:"check-group") {
														  move_children_to(%three, position("top"))
														  remove()
														}	
													}
													$("(./div[@class='row'])[4]"){
														wrap("div",class:"check-group") {
														move_children_to(%three, position("bottom"))
															remove()
														}	
													}
										
												}
												$("(.././div[contains(@class,'quarter-col')])[2]") {
													$("(./div[@class='row'])[4]"){
														wrap("div",class:"check-group") {
														move_children_to(%three, position("bottom"))	
															remove()
														}	
													}
										
												}
											}
										}
									}
								}
							}
							$("./div[@id='tab-3']"){
								$(".//fieldset"){
									$("(./div[@class='field'])[1]"){
										$("(./div[@class='row'])[1]"){
											%four = this()
											$("./div[contains(@class,'quart-col')]") {
												remove_class("quart-col")
												add_class("mw_quarter-col")
											}
											$("(.././div[@class='row'])[2]"){
												$("./div[contains(@class,'half-col')]"){
													remove_class("half-col")
													add_class("mw_third-col")
												}
												move_children_to(%four, position("bottom"))
												remove()
											}
										}
										$("./div[@id='radio-tab3']"){
											%six =this()
											$("./div[contains(@class,'half-col')]"){
												$("./div[@class='row'][1]"){
													%seven=this()
													$("../div[@class='row'][2]") {
														move_children_to(%seven, position("bottom"))
														remove()
													}	
												}
												move_children_to(%six, position("bottom"))
												remove()
											}
										}
									}
									$("(./div[@class='field'])[2]"){
										$("./div[@class='row'][1]"){
											%two = this()
											$("../div[@class='row'][2]") {
												move_children_to(%two, position("bottom"))
												remove()
											}
										}
										$("./div[@class='row'][2]"){
											%two = this()
											$("../div[@class='row'][3]") {
												move_children_to(%two, position("bottom"))
												remove()
											}
										}
										$("./div[@class='row'][3]"){
											%two = this()
											$("../div[@class='row'][4]") {
												move_children_to(%two, position("bottom"))
												remove()
											}
										}
									}		
								}
							}
						}
					}
					
					##Ramesh code starts here
				
					insert_before("div",id:"mw_hmContentDiv")
					$('./div[@id="c12248"]'){
						insert_before("div",id:"mw_hmDiv")
					}
					
					$('./div[@id="c12420"]'){
						move_to('../div[@id="mw_hmDiv"]',"top")
						insert_after("div",id:"mw_hrLine")
						$('.//ul'){
							$('./li'){
								$('./a'){
									insert_after("div",id:"mw_hrdottedLine")
								}
							}
						}
					}
					$('./div[@id="c12316"]'){
						#$('./div[@class="links-block"]'){
							#{
							#	move_to("../../div[@id='c12316']","bottom")
								#remove()
							#}
						#}
						move_to('../div[@id="mw_hmDiv"]',"bottom")
					}
					##Ramesh code ends here	
				}
				##Ramesh code starts here
				$('./div[@id="content"]'){
					move_here("./div[@id='c12136']","top")
					$(".//div[contains(@class,'gallery')]"){
						$(".//img") {
							attribute("width","")
							attribute("height","")
						}
						remove("./div[@class = 'switcher']")
					}
					
					$('./div[@id="c12137"]'){
						move_to('../.././div[@id="mw_hmContentDiv"]',"top")
					}
				}
				$('./div[@id="mw_hmContentDiv"]'){
					$('./div[@id="c12137"]'){
						$('./div[@class="content-posts"]'){
							$('./div'){
								attribute("id","mw_cont"+index(this()))
							}
							
							$('./div[@id="mw_cont1"]'){
								$('./div[@class="img-holder red"]'){
									insert_after("div",id:"mw_FamContent")
								}
								$('./div[@id="mw_FamContent"]'){
									insert("div",id:"mw_DivText")
									insert("div",id:"mw_DivAnchor")
									$('./div[@id="mw_DivText"]'){
										move_here('../.././p',"top")
										
									}									
									$('./div[@id="mw_DivAnchor"]'){
										move_here('../.././a',"bottom")
									}
								}
							}
							$('./div[@id="mw_cont2"]'){
								log('-------------------------------------------------------> : : : MW_CONT2')
								$('./div[@class="img-holder green"]'){
									log('-------------------------------------------------------> : : : GREEN')
									insert_after("div",id:"mw_Entertainment")
								}
								$('./div[@id="mw_Entertainment"]'){
									insert("div",id:"mw_DivText")
									insert("div",id:"mw_DivAnchor")
									$('./div[@id="mw_DivText"]'){
										move_here('../.././p',"top")
									}	
									$('./div[@id="mw_DivAnchor"]'){
										move_here('../.././a',"bottom")
									}	
								}
							}
							$('./div[@id="mw_cont3"]'){
								$('./div[@class="img-holder blue"]'){
									insert_after("div",id:"mw_Sport")
								}
								$('./div[@id="mw_Sport"]'){
									insert("div",id:"mw_DivText")
									insert("div",id:"mw_DivAnchor")
									$('./div[@id="mw_DivText"]'){
										move_here('../.././p',"top")
									}	
									$('./div[@id="mw_DivAnchor"]'){
										move_here('../.././a',"bottom")
									}	
								}
							}
							$('./div[@id="mw_cont4"]'){
								$('./div[@class="img-holder brown"]'){
									insert_after("div",id:"mw_Chillax")
								}
								$('./div[@id="mw_Chillax"]'){
									insert("div",id:"mw_DivText")
									insert("div",id:"mw_DivAnchor")
									$('./div[@id="mw_DivText"]'){
										move_here('../.././p',"top")
										
									}	
									$('./div[@id="mw_DivAnchor"]'){
										move_here('../.././a',"bottom")
									}	
								}
							}
						}
					}
					move_here(".././/div[@id='mw_hmDiv']","before")
				}
				
				##Ramesh code ends here	
			}	
		}
	}
}	